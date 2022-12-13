const links = {
    setColor: function (color) {
        //        const link = document.querySelectorAll('a');
        //        let i = 0;
        //        while (i < link.length) {
        //            link[i].style.color = color;
        //            i = i + 1;
        //        }
        // $('a') --> 모든 a 태그를 jQuery로 제어한다는 뜻. 
        // .css('color', color) --> color 매개변수를 받아 'color'를 변경한다.
        $('a').css('color', color);
    }
}

const body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackGroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
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