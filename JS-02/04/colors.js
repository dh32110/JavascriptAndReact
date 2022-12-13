const links = {
   setColor: function (color) {
       const link = document.querySelectorAll('a');
       let i = 0;
       while (i < link.length) {
           link[i].style.color = color;
           i = i + 1;
       }
   }
}

const body = {
   setColor: function (color) {
       document.querySelector('body').style.color = color;
   },
   setBackGroundColor: function (color) {
       document.querySelector('body').style.backgroundColor = color;
   }
}

function nightDayHandler(self) {
   const target = document.querySelector('body');
   if (self.value === 'night') {
       body.setBackGroundColor('black');
       body.setColor('white');
       self.value = 'day';
       links.setColor('powderblue');
   } else {
       body.setBackGroundColor('white');
       body.setColor('black');
       self.value = 'night';
       links.setColor('blue');
   }
}