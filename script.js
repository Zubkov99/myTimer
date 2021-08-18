const finish = '2022-10-19T10:00:00';


  class Timer{
    constructor(endtime) {
        this.endtime = endtime;
        this.start();
    }
    render() {
        const totalTime = Date.parse(this.endtime) - Date.parse(new Date());
        const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor( (totalTime / 1000 / 60 / 60 % 24));
        const minutes = Math.floor((totalTime/ 1000 /60) % 60);
        const seconds = Math.floor((totalTime / 1000) % 60);

        document.querySelector('.seconds').innerHTML = getZero(seconds);
        document.querySelector('.days').innerHTML = getZero(days);
        document.querySelector('.hours').innerHTML = getZero(hours);
        document.querySelector('.minutes').innerHTML = getZero(minutes);
        if (totalTime < 1) {
          alert('Все в кино!')
          clearInterval(this.time)
        }
       
        function getZero(num) {
          if(num >= 0 && num < 10) {
            return`0${num}`
          } else return num
        }
    }

    start() {
        this.render();
        this.time = setInterval(() => this.render(), 1000);
    }
      
  }

  let itMustWork = new Timer(finish);

  console.log('test 3s');
