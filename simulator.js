module.exports.sim = (publish) => {
    const car_types_arr = ["Private", "Van", "Truck"];
    const days_arr = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];
    var i = 0;
    setInterval(function () {
        var temp_sec_enter = Math.floor(Math.random() * 5) + 1;
        var temp_sec_exit = Math.floor(Math.random() * 5) + 1;
        var temp_car = car_types_arr[Math.floor(Math.random() * 3)];
        var temp_day = days_arr[Math.floor(Math.random() * 7)];
        var temp_special = Math.floor(Math.random() * 2);
        var temp_hour = Math.floor(Math.random() * 25).toString() + ":" + Math.floor(Math.random() * 6).toString() + Math.floor(Math.random() * 10).toString();
        var getHour = temp_hour.substr(0, temp_hour.indexOf(':'));
        if (temp_special == 0) {
            temp_special = "no"
        }
        else {
            temp_special = "yes"
        }
        console.log(i)
        var myRandom = Math.random()
   
        if ((temp_day == 'Sunday' || temp_day == 'Monday' || temp_day == 'Tuesday') && (temp_car == 'Van')) {
            if (myRandom < 0.8) {
                temp_sec_exit = 1
            }
        }
        if ((temp_day == 'Sunday' || temp_day == 'Monday' || temp_day == 'Tuesday') && (temp_car == 'Truck')) {
            if (myRandom < 0.8) {
                temp_sec_exit = 2
            }
        }
        if ((temp_day == 'Sunday' || temp_day == 'Monday' || temp_day == 'Tuesday') && (temp_car == 'Private')) {
            if (myRandom < 0.8) {
                temp_sec_exit = 3
            }
        }
        if ((temp_day == 'Wendsday' || temp_day == 'Thursday' || temp_day == 'Friday') && (temp_car == 'Van')) {
            if (myRandom < 0.8) {
                temp_sec_exit = 4
            }
        }
        if ((temp_day == 'Wendsday' || temp_day == 'Thursday' || temp_day == 'Friday') && (temp_car == 'Truck')) {
            if (myRandom < 0.8) {
                temp_sec_exit = 5
            }
        }
        if ((temp_day == 'Wendsday' || temp_day == 'Thursday' || temp_day == 'Friday') && (temp_car == 'Private')) {
            if (myRandom < 0.8) {
                temp_sec_exit = 1
            }
        }

        if (temp_day == 'Saturday' && parseInt(getHour) >= 12) {
            if (myRandom < 0.8) {
                temp_sec_exit = 5
            }
        }

        if (temp_day == 'Saturday' && parseInt(getHour) <= 12) {
            if (myRandom < 0.8) {
                temp_sec_exit = 1
            }
        }
        if (temp_sec_enter == 1) {
            if (myRandom < 0.8) {
                temp_sec_exit = 2
            }
        } if (temp_sec_enter == 2) {
            if (myRandom < 0.8) {
                temp_sec_exit = 3
            }
        }
        if (temp_sec_enter == 3) {
            if (myRandom < 0.8) {
                temp_sec_exit = 4
            }
        } if (temp_sec_enter == 5) {
            if (myRandom < 0.8) {
                temp_sec_exit = 1
            }
        } if (temp_sec_enter == 4) {
            if (myRandom < 0.8) {
                temp_sec_exit = 5
            }
        }
        var e = {};
        e.enter_section = temp_sec_enter;
        e.car_type = temp_car;
        e.day = temp_day;
        e.hour = temp_hour;
        e.is_special = temp_special;
        e.exit_section = temp_sec_exit;
        i++
        publish(e);
    }, 1000);
}