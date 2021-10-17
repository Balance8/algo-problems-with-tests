// Task description

// John likes to travel. He has visited a lot of cities over many years. Whenever he visits a city, he takes a few photos and saves them on his computer. Each photo has a name with an extension ("jpg", "png" or "jpeg") and there is a record of the name of the city where the photo was taken and the time and date the photo; for example: "photo.jpg, Warsaw, 2013-09-05 14:08:15".

// Note that, in some rare cases, photos from different locations may share the time and date, due to timezone differences.

// John notices that his way of filing photos on his computer has become a mess. He wants to reorganize the photos. First he decides to group the photos by city, then, within each such group, sort the photos by the time they were taken and finally assign consecutive natural numbers to the photos, starting from 1. Afterwards he intends to rename all the photos. The new name of each photo should begin with the name of the city followed by the number already assigned to that photo. The number of every photo in each group should have the same length (equal to the length of the largest number in this group); thus, John needs to add some leading zeros to the numbers. The new name of the photo should end with the extension, which should remain the same.

// Your task is to help John by finding the new name of each photo.

// Each of John's photos has the format: "<<photoname>>.<<extension>>, <<city_name>>, yyyy-mm-dd hh:mm:ss", where "<<photoname>>", "<<extension>>" and "<<city_name>>" consist only of letters of the English alphabet and supply the name of the photo, the file name extension and the city name, respectively. Be aware that the names of the photos may not be unique.

// Write a function:

// class Solution { public String solution(String S); }

// that, given a string representing the list of M photos, returns the string representing the list of the new names of all photos (the order of photos should stay the same).

// For example, given a string:

// photo.jpg, Warsaw, 2013-09-05 14:08:15.
// john.png, London, 2015-06-20 15:13:22.
// myFriends.png, Warsaw, 2013-09-05 14:07:13.
// Eiffel.jpg, Paris, 2015-07-23 08:03:02.
// pisatower.jpg, Paris, 2015-07-22 23:59:59.
// BOB.jpg, London, 2015-08-05 00:02:03.
// notredame.png, Paris, 2015-09-01 12:00:00.
// me.jpg, Warsaw, 2013-09-06 15:40:22.
// a.png, Warsaw, 2016-02-13 13:33:50.
// b.jpg, Warsaw, 2016-01-02 15:12:22.
// c.jpg, Warsaw, 2016-01-02 14:34:30.
// d.jpg, Warsaw, 2016-01-02 15:15:01.
// e.png, Warsaw, 2016-01-02 09:49:09.
// f.png, Warsaw, 2016-01-02 10:55:32.
// g.jpg, Warsaw, 2016-02-29 22:13:11

// your function should return:

// Warsaw02.jpg.
// London1.png.
// Warsaw01.png.
// Paris2.jpg.
// Paris1.jpg.
// London2.jpg.
// Paris3.png.
// Warsaw03.jpg.
// Warsaw09.png.
// Warsaw07.jpg.
// Warsaw06.jpg.
// Warsaw08.jpg.
// Warsaw04.png.
// Warsaw05.png.
// Warsaw10.jpg

// as there are ten photos taken in Warsaw (numbered from 01 to 10), two photos in London (numbered from 1 to 2) and three photos in Paris (numbered from 1 to 3).

// The new names of the photos are returned in the same order as in the given string.

// Assume that:

// 1. M is an integer within the range [1..100];
// 2. Each year is an integer within the range [2000..2020];
// 3. Each line of the input string is of the format "<<photoname>>.<<extension>>, <<city_name>>, yyyy-mm-dd hh:mm:ss" and lines are separated with newline characters;
// 4. Each photo name (without extension}) and city name consists only of at least 1 and at most 20 letters from the English alphabet;
// 5. Each name of the city starts with a capital letter and is followed by lower case letters;
// 6. No two photos from the same location share the same date and time;
// 7. Each extension is "jpg", "png" or "jpeg".

// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

export function renamePhotos(S) {
  // order the data into an object with the structure:
  // {
  //   city: {
  //     "YYYY-MM-D": {
  //       photo: {
  //         photoName: {
  //           extension: '',
  //           city: ''
  //         }
  //       }
  //     }
  //   }
  // }
  const data = {};
  const lines = S.split('\n');
  console.log(lines);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(', ');
    const photoName = line[0].split('.');
    const city = line[1];
    const date = line[2].split(' ');
    const year = date[0].split('-');
    const time = date[1].split(':');

    // construct the time string in the format HH:MM:SS
    const timeString = time[0] + ':' + time[1] + ':' + time[2];
    const photo = {
      extension: photoName[1],
      time: timeString,
    };
    const dateObject = {
      year: year[0],
      month: year[1],
      day: year[2],
      hour: time[0],
      minute: time[1],
      second: time[2],
    };
    // construct the date object using YYYY-MM-DD
    const dateString =
      dateObject.year + '-' + dateObject.month + '-' + dateObject.day;
    if (!data[city]) {
      data[city] = {};
    }
    if (!data[city][dateString]) {
      data[city][dateString] = {};
    }
    data[city][dateString][photoName[0]] = photo;
  }

  console.log('data', JSON.stringify(data, null, 2));

  // out put the new names of the photos in the same order as in the given string in the format:
  // <<city_name>><<number>>.<<extension>>
  let output = '';
  for (const city in data) {
    let cityNumber = 0;
    for (const date in data[city]) {
      for (const photo in data[city][date]) {
        cityNumber++;
        output +=
          city +
          (cityNumber >= 10 ? cityNumber : `0${cityNumber}`) +
          '.' +
          data[city][date][photo].extension +
          '\n';
      }
    }
  }

  console.log(output);
  return output;
}

console.log(
  renamePhotos(
    'photo.jpg, Warsaw, 2013-09-05 14:08:15.\njohn.png, London, 2015-06-20 15:13:22.\nmyFriends.png, Warsaw, 2013-09-05 14:07:13.\neiffel.jpg, Paris, 2015-07-23 08:03:02.\npisatower.jpg, Paris, 2015-07-22 23:59:59.\nBOB.jpg, London, 2015-08-05 00:02:03.\nnotredame.png, Paris, 2015-09-01 12:00:00.\nme.jpg, Warsaw, 2013-09-06 15:40:22.\na.png, Warsaw, 2016-02-13 13:33:50.\nb.jpg, Warsaw, 2016-01-02 15:12:22.\nc.jpg, Warsaw, 2016-01-02 14:34:30.\nd.jpg, Warsaw, 2016-01-02 15:15:01.\ne.png, Warsaw, 2016-01-02 09:49:09.\nf.png, Warsaw, 2016-01-02 10:55:32.\ng.jpg, Warsaw, 2016-02-29 22:13:11'
  )
); // Warsaw02.jpg.London1.png.Warsaw01.png.Paris2.jpg.Paris1.jpg.London2.jpg.Paris3.png.Warsaw03.jpg.Warsaw09.png.Warsaw07.png.Warsaw06.jpg.Warsaw08.jpg.Warsaw04.png.Warsaw05.png.Warsaw10.jpg

// The idea is to use a hashmap to store the data.
// The key is the city name, the value is an object with the following structure:
// {
//   "YYYY-MM-D": {
//     photo: {
//       photoName: {
//         extension: '',
//         city: ''
//       }
//     }
//   }
// }
// The key is the date in the format YYYY-MM-D, the value is an object with the following structure:
// {
//   photo: {
//     photoName: {
//       extension: '',
//       city: ''
//     }
//   }
// }
// The key is the photo name, the value is an object with the following structure:
// {
//   extension: '',
//   city: ''
// }
// The key is the extension, the value is the city name.
// The output is the new names of the photos in the same order as in the given string.

// Time complexity: O(n^2)
// Space complexity: O(n)
