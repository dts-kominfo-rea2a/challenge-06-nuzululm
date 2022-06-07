// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

const fs = require('fs');

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (cbHasil) => {
  let result = [];
  let errors = [];
  fs.readFile(file1, 'utf-8', (err, data1) => {
		if (err) return cbHasil(err);
		fs.readFile(file2, 'utf-8', (err, data2) => {
			if (err) return cbHasil(err);
			fs.readFile(file3, 'utf-8', (err, data3) => {
				let result =
					JSON.parse(data1).message + ' ' +
					JSON.parse(data2)[0].message + ' ' +
					JSON.parse(data3)[0].data.message;
				cbHasil(
					err,
					result.split(' ').filter((element, index) => element.toLowerCase() !== 'halo')
				);
			});
		});
	});
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
