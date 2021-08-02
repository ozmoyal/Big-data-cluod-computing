
/**
*  Predictor for exit_section from model/61002fd739339b69d40697af
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictExit_section(enter_section, car_type, day, hourMinute, hourHour) {
    if (enter_section == null) {
        return 3.28145;
    }
    else if (enter_section > 4) {
        if (hourHour == null) {
            return 1.41935;
        }
        else if (hourHour > 3) {
            if (hourMinute == null) {
                return 1.45103;
            }
            else if (hourMinute > 3) {
                if (hourMinute > 4) {
                    if (hourHour > 20) {
                        if (day == null) {
                            return 1.66;
                        }
                        else if (day == "Saturday") {
                            if (car_type == null) {
                                return 3;
                            }
                            else if (car_type == "Truck") {
                                return 5;
                            }
                            else if (car_type != "Truck") {
                                return 2.33333;
                            }
                        }
                        else if (day != "Saturday") {
                            if (hourMinute > 54) {
                                return 3.33333;
                            }
                            else if (hourMinute <= 54) {
                                if (hourHour > 22) {
                                    return 1.5625;
                                }
                                else if (hourHour <= 22) {
                                    return 1.04348;
                                }
                            }
                        }
                    }
                    else if (hourHour <= 20) {
                        if (day == null) {
                            return 1.44134;
                        }
                        else if (day == "Sunday") {
                            if (hourMinute > 54) {
                                if (hourHour > 16) {
                                    return 1;
                                }
                                else if (hourHour <= 16) {
                                    return 5;
                                }
                            }
                            else if (hourMinute <= 54) {
                                if (hourHour > 13) {
                                    return 1.1;
                                }
                                else if (hourHour <= 13) {
                                    if (car_type == null) {
                                        return 1.84615;
                                    }
                                    else if (car_type == "Van") {
                                        return 1;
                                    }
                                    else if (car_type != "Van") {
                                        return 2.1;
                                    }
                                }
                            }
                        }
                        else if (day != "Sunday") {
                            if (car_type == null) {
                                return 1.40909;
                            }
                            else if (car_type == "Van") {
                                if (hourMinute > 33) {
                                    return 1.25;
                                }
                                else if (hourMinute <= 33) {
                                    if (day == "Thursday") {
                                        return 2.85714;
                                    }
                                    else if (day != "Thursday") {
                                        if (hourHour > 6) {
                                            if (hourHour > 12) {
                                                return 1.89474;
                                            }
                                            else if (hourHour <= 12) {
                                                return 1;
                                            }
                                        }
                                        else if (hourHour <= 6) {
                                            if (hourMinute > 17) {
                                                return 4.33333;
                                            }
                                            else if (hourMinute <= 17) {
                                                return 1;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (car_type != "Van") {
                                if (hourMinute > 26) {
                                    if (day == "Monday") {
                                        if (hourHour > 10) {
                                            return 1.21429;
                                        }
                                        else if (hourHour <= 10) {
                                            return 2.66667;
                                        }
                                    }
                                    else if (day != "Monday") {
                                        if (hourHour > 16) {
                                            return 1.76;
                                        }
                                        else if (hourHour <= 16) {
                                            if (hourMinute > 28) {
                                                if (hourMinute > 57) {
                                                    return 2;
                                                }
                                                else if (hourMinute <= 57) {
                                                    return 1.10811;
                                                }
                                            }
                                            else if (hourMinute <= 28) {
                                                return 1.77778;
                                            }
                                        }
                                    }
                                }
                                else if (hourMinute <= 26) {
                                    if (hourHour > 19) {
                                        return 2;
                                    }
                                    else if (hourHour <= 19) {
                                        return 1.13333;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (hourMinute <= 4) {
                    return 2.66667;
                }
            }
            else if (hourMinute <= 3) {
                return 1.07143;
            }
        }
        else if (hourHour <= 3) {
            if (day == null) {
                return 1.19444;
            }
            else if (day == "Wendsday") {
                return 1.53846;
            }
            else if (day != "Wendsday") {
                return 1.11864;
            }
        }
    }
    else if (enter_section <= 4) {
        if (enter_section > 1) {
            if (enter_section > 2) {
                if (enter_section > 3) {
                    if (hourHour == null) {
                        return 4.60041;
                    }
                    else if (hourHour > 9) {
                        if (hourMinute == null) {
                            return 4.68571;
                        }
                        else if (hourMinute > 8) {
                            if (day == null) {
                                return 4.74274;
                            }
                            else if (day == "Sunday") {
                                if (hourHour > 20) {
                                    if (car_type == null) {
                                        return 3.66667;
                                    }
                                    else if (car_type == "Private") {
                                        return 5;
                                    }
                                    else if (car_type != "Private") {
                                        return 1;
                                    }
                                }
                                else if (hourHour <= 20) {
                                    return 4.66667;
                                }
                            }
                            else if (day != "Sunday") {
                                if (day == "Saturday") {
                                    return 5;
                                }
                                else if (day != "Saturday") {
                                    if (hourMinute > 42) {
                                        if (hourMinute > 57) {
                                            return 4.2;
                                        }
                                        else if (hourMinute <= 57) {
                                            return 4.92188;
                                        }
                                    }
                                    else if (hourMinute <= 42) {
                                        if (hourMinute > 39) {
                                            return 4.11111;
                                        }
                                        else if (hourMinute <= 39) {
                                            return 4.71875;
                                        }
                                    }
                                }
                            }
                        }
                        else if (hourMinute <= 8) {
                            if (day == null) {
                                return 4.33333;
                            }
                            else if (day == "Monday") {
                                if (car_type == null) {
                                    return 3.16667;
                                }
                                else if (car_type == "Private") {
                                    return 5;
                                }
                                else if (car_type != "Private") {
                                    return 2.25;
                                }
                            }
                            else if (day != "Monday") {
                                if (hourHour > 22) {
                                    if (hourMinute > 4) {
                                        return 5;
                                    }
                                    else if (hourMinute <= 4) {
                                        return 2;
                                    }
                                }
                                else if (hourHour <= 22) {
                                    if (day == "Wendsday") {
                                        return 3.66667;
                                    }
                                    else if (day != "Wendsday") {
                                        return 4.8;
                                    }
                                }
                            }
                        }
                    }
                    else if (hourHour <= 9) {
                        if (day == null) {
                            return 4.45745;
                        }
                        else if (day == "Monday") {
                            return 4.96552;
                        }
                        else if (day != "Monday") {
                            if (car_type == null) {
                                return 4.36478;
                            }
                            else if (car_type == "Van") {
                                if (hourHour > 4) {
                                    if (day == "Sunday") {
                                        if (hourHour > 7) {
                                            return 5;
                                        }
                                        else if (hourHour <= 7) {
                                            return 2;
                                        }
                                    }
                                    else if (day != "Sunday") {
                                        return 4.66667;
                                    }
                                }
                                else if (hourHour <= 4) {
                                    return 4.875;
                                }
                            }
                            else if (car_type != "Van") {
                                if (hourMinute == null) {
                                    return 4.16162;
                                }
                                else if (hourMinute > 57) {
                                    return 1;
                                }
                                else if (hourMinute <= 57) {
                                    if (hourMinute > 9) {
                                        if (hourMinute > 18) {
                                            if (day == "Sunday") {
                                                return 4.92857;
                                            }
                                            else if (day != "Sunday") {
                                                if (hourMinute > 52) {
                                                    return 3.22222;
                                                }
                                                else if (hourMinute <= 52) {
                                                    if (hourMinute > 36) {
                                                        if (day == "Friday") {
                                                            return 4.125;
                                                        }
                                                        else if (day != "Friday") {
                                                            return 4.95238;
                                                        }
                                                    }
                                                    else if (hourMinute <= 36) {
                                                        return 3.72222;
                                                    }
                                                }
                                            }
                                        }
                                        else if (hourMinute <= 18) {
                                            return 3.23529;
                                        }
                                    }
                                    else if (hourMinute <= 9) {
                                        return 4.90909;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (enter_section <= 3) {
                    if (hourHour == null) {
                        return 3.75746;
                    }
                    else if (hourHour > 14) {
                        if (day == null) {
                            return 3.85204;
                        }
                        else if (day == "Saturday") {
                            return 4.17391;
                        }
                        else if (day != "Saturday") {
                            if (car_type == null) {
                                return 3.80925;
                            }
                            else if (car_type == "Van") {
                                if (hourMinute == null) {
                                    return 3.94915;
                                }
                                else if (hourMinute > 9) {
                                    return 4.04;
                                }
                                else if (hourMinute <= 9) {
                                    if (hourMinute > 6) {
                                        if (hourHour > 17) {
                                            return 1.5;
                                        }
                                        else if (hourHour <= 17) {
                                            return 4;
                                        }
                                    }
                                    else if (hourMinute <= 6) {
                                        return 4;
                                    }
                                }
                            }
                            else if (car_type != "Van") {
                                if (hourMinute == null) {
                                    return 3.73684;
                                }
                                else if (hourMinute > 52) {
                                    return 3.16667;
                                }
                                else if (hourMinute <= 52) {
                                    return 3.80392;
                                }
                            }
                        }
                    }
                    else if (hourHour <= 14) {
                        if (hourMinute == null) {
                            return 3.70486;
                        }
                        else if (hourMinute > 7) {
                            if (hourMinute > 15) {
                                if (hourMinute > 17) {
                                    return 3.72637;
                                }
                                else if (hourMinute <= 17) {
                                    return 3;
                                }
                            }
                            else if (hourMinute <= 15) {
                                return 3.97368;
                            }
                        }
                        else if (hourMinute <= 7) {
                            if (day == null) {
                                return 3.5;
                            }
                            else if (day == "Friday") {
                                return 2.5;
                            }
                            else if (day != "Friday") {
                                if (hourHour > 1) {
                                    if (hourMinute > 0) {
                                        return 3.84615;
                                    }
                                    else if (hourMinute <= 0) {
                                        return 3.125;
                                    }
                                }
                                else if (hourHour <= 1) {
                                    return 2.5;
                                }
                            }
                        }
                    }
                }
            }
            else if (enter_section <= 2) {
                if (hourHour == null) {
                    return 4.59496;
                }
                else if (hourHour > 0) {
                    if (hourMinute == null) {
                        return 4.62708;
                    }
                    else if (hourMinute > 21) {
                        if (hourHour > 2) {
                            if (day == null) {
                                return 4.73776;
                            }
                            else if (day == "Saturday") {
                                return 5;
                            }
                            else if (day != "Saturday") {
                                if (hourHour > 15) {
                                    if (hourHour > 19) {
                                        return 4.75862;
                                    }
                                    else if (hourHour <= 19) {
                                        if (hourMinute > 48) {
                                            return 3.75;
                                        }
                                        else if (hourMinute <= 48) {
                                            if (day == "Wendsday") {
                                                if (hourHour > 18) {
                                                    return 2.5;
                                                }
                                                else if (hourHour <= 18) {
                                                    return 5;
                                                }
                                            }
                                            else if (day != "Wendsday") {
                                                if (day == "Friday") {
                                                    return 4.33333;
                                                }
                                                else if (day != "Friday") {
                                                    return 4.90476;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (hourHour <= 15) {
                                    if (car_type == null) {
                                        return 4.76761;
                                    }
                                    else if (car_type == "Van") {
                                        if (day == "Tuesday") {
                                            return 4.2;
                                        }
                                        else if (day != "Tuesday") {
                                            if (hourMinute > 57) {
                                                return 3.5;
                                            }
                                            else if (hourMinute <= 57) {
                                                return 4.7561;
                                            }
                                        }
                                    }
                                    else if (car_type != "Van") {
                                        return 4.86517;
                                    }
                                }
                            }
                        }
                        else if (hourHour <= 2) {
                            return 4.41667;
                        }
                    }
                    else if (hourMinute <= 21) {
                        if (hourMinute > 19) {
                            return 3.75;
                        }
                        else if (hourMinute <= 19) {
                            if (car_type == null) {
                                return 4.54545;
                            }
                            else if (car_type == "Private") {
                                if (hourHour > 18) {
                                    return 5;
                                }
                                else if (hourHour <= 18) {
                                    if (hourHour > 11) {
                                        return 3.66667;
                                    }
                                    else if (hourHour <= 11) {
                                        if (hourHour > 8) {
                                            return 5;
                                        }
                                        else if (hourHour <= 8) {
                                            return 4.19048;
                                        }
                                    }
                                }
                            }
                            else if (car_type != "Private") {
                                if (day == null) {
                                    return 4.66667;
                                }
                                else if (day == "Wendsday") {
                                    return 5;
                                }
                                else if (day != "Wendsday") {
                                    if (hourHour > 4) {
                                        if (day == "Tuesday") {
                                            return 4.125;
                                        }
                                        else if (day != "Tuesday") {
                                            return 4.77778;
                                        }
                                    }
                                    else if (hourHour <= 4) {
                                        return 4.36364;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (hourHour <= 0) {
                    return 3.95238;
                }
            }
        }
        else if (enter_section <= 1) {
            if (hourHour == null) {
                return 2.16893;
            }
            else if (hourHour > 10) {
                if (hourHour > 17) {
                    if (hourMinute == null) {
                        return 2.11628;
                    }
                    else if (hourMinute > 19) {
                        return 2.03333;
                    }
                    else if (hourMinute <= 19) {
                        if (car_type == null) {
                            return 2.30769;
                        }
                        else if (car_type == "Van") {
                            return 2.66667;
                        }
                        else if (car_type != "Van") {
                            return 2.08333;
                        }
                    }
                }
                else if (hourHour <= 17) {
                    if (day == null) {
                        return 2.34868;
                    }
                    else if (day == "Thursday") {
                        if (hourHour > 12) {
                            return 2.5;
                        }
                        else if (hourHour <= 12) {
                            if (hourMinute == null) {
                                return 3.4;
                            }
                            else if (hourMinute > 46) {
                                return 5;
                            }
                            else if (hourMinute <= 46) {
                                return 2.33333;
                            }
                        }
                    }
                    else if (day != "Thursday") {
                        if (car_type == null) {
                            return 2.28346;
                        }
                        else if (car_type == "Private") {
                            if (hourMinute == null) {
                                return 2.45455;
                            }
                            else if (hourMinute > 5) {
                                if (hourHour > 15) {
                                    return 2;
                                }
                                else if (hourHour <= 15) {
                                    return 2.5;
                                }
                            }
                            else if (hourMinute <= 5) {
                                return 3.25;
                            }
                        }
                        else if (car_type != "Private") {
                            if (hourMinute == null) {
                                return 2.19277;
                            }
                            else if (hourMinute > 53) {
                                return 2.83333;
                            }
                            else if (hourMinute <= 53) {
                                if (day == "Saturday") {
                                    return 2.53333;
                                }
                                else if (day != "Saturday") {
                                    return 2.04839;
                                }
                            }
                        }
                    }
                }
            }
            else if (hourHour <= 10) {
                if (day == null) {
                    return 2.08597;
                }
                else if (day == "Tuesday") {
                    if (hourMinute == null) {
                        return 2.4;
                    }
                    else if (hourMinute > 56) {
                        return 5;
                    }
                    else if (hourMinute <= 56) {
                        if (hourMinute > 38) {
                            return 2.77778;
                        }
                        else if (hourMinute <= 38) {
                            return 2.1;
                        }
                    }
                }
                else if (day != "Tuesday") {
                    if (day == "Saturday") {
                        return 1.75;
                    }
                    else if (day != "Saturday") {
                        if (hourMinute == null) {
                            return 2.07784;
                        }
                        else if (hourMinute > 5) {
                            return 2.11806;
                        }
                        else if (hourMinute <= 5) {
                            return 1.82609;
                        }
                    }
                }
            }
        }
    }
    return null;
}