const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function encodeUTF8(s) {
	var i, r = [], c, x;
	for (i = 0; i < s.length; i++)
		if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
		else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
		else {
			if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
				c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
					r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
			else r.push(0xE0 + (c >> 12 & 0xF));
			r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
		};
	return r;
};

function compare(property){
	return function(a,b){
		var value1 = a[property];
		var value2 = b[property];
		return value1 - value2;
	}
}
module.exports = {
  formatTime: formatTime,
	encodeUTF8:encodeUTF8,
	sha1:sha1,
	compare: compare
}


