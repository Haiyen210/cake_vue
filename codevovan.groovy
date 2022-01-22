<?php
class MyDateTime
{
    public $year;
    public $month;
    public $day;
    public $hour;
    public $minute;
    public $second;
    public $timestamp;

    public function setTime($stringTime, MyDateTime $myDateTime) // cái hàm setTime này để cắt tách chuỗi thành mảng
    {    
        $dateTime = explode(" ", $stringTime);
        /*
        $stringTime: là thời gian a nhập vào nó sẽ nhận, 
        cái hàm explode đấy là để cắt chuỗi thành mảng,
        $datetime: là biến khi đã đc cắt chuỗi ra rồi nhé
        vd: 2020-09-09 12:00:21
        lúc này sẽ cắt nó ra thành: 2020-09-09 và 12:00:21 => cái datetime chính là cái mảng đc cắt ra rồi đó là 2020-09-09 và 12:00:21
        lúc này datetime  là 1 mảng nhé!!!!!!
        */
        $date = $dateTime[0];
        $time = $dateTime[1];
        /**
         * $date chính là mảng thứ 0 của $datetime nhé => datetime[0] = 2020-09-09 => đây là vd
         * $time chính là mảng thứ 1 của $datetime nhé => datetime[1] = 12:00:21 => đây là vd
         * (em lấy ví dụ trên nhé)
         */
        $dateArray = explode("-", $date);
        $timeArray = explode(":", $time);
        /**
         * $dateArray và  $timeArray lúc này lại cắt chuỗi tiếp,
         * lúc này dateArray cắt ra để lấy year, month, day
         * còn timeArray cắt ra để lấy hour, minute, second
         */
        $myDateTime->year = $dateArray[0]; //$dateArray[0] là vị trí mảng thứ 0 sẽ lấy đc year
        $myDateTime->month = $dateArray[1];//$dateArray[1] là vị trí mảng thứ 1 sẽ lấy đc month
        $myDateTime->day = $dateArray[2];//$dateArray[2] là vị trí mảng thứ 2 sẽ lấy đc day
        $myDateTime->hour = $timeArray[0];// dưới này cũng tương tự, chắc chắn a sẽ thắc mắc là tại sao k có vị trí thứ 3 
                                        //=> cái dateArray nó cắt cái date ra chỉ có 3 vị trí đó là year, month, day thôi tương tự như time nhé
        $myDateTime->minute = $timeArray[1];
        $myDateTime->second = $timeArray[2];
    }
    /*
    hàm now là cái hàm lấy time hiện tại
    */
    public static function now()
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $date = date("Y-m-d H:i:s"); // cái này lấy ra đc time hiện tại
        $myDateTime =  new MyDateTime; 
        $myDateTime->setTime($date, $myDateTime);
        // $myDateTime =  new MyDateTime là để khởi tạo mới cái class MyDateTime
        //setTime là khi có time hiện tại rồi nó sẽ set vào
        return $myDateTime; // trả về $myDateTime
    }
    //cái hàm createFromString ktra xem có đúng định dạng datetime hay không
    public static function createFromString($stringTime)
    {
        // lúc này ktra nếu định dạng datetime không sai thì sẽ tạo mới MyDateTime rồi set cái time mới vào. Nếu sai thì sẽ trả else 1 cái echo đó
        //strtotime: dùng để kiểm tra xem có đúng định dạng datetime hay không
        if(DateTime::createFromFormat('Y-m-d H:i:s', $stringTime) !== FALSE 
        && date("Y-m-d H:i:s", strtotime($stringTime)) == $stringTime) 
        {
            $myDateTime =  new MyDateTime;
            $myDateTime->setTime($stringTime, $myDateTime);
            return $myDateTime;
        }
        else
        {
            echo "Thời gian sai định dạng hoặc không chính xác";
        }
    }
    // hàm addMinutes này dùng để cộng thêm phút
    public function addMinutes($minutes)
    {
        $myDateTime = new MyDateTime();
        $myDateTime->minute = 0; //mới đầu thì sẽ mặc định phút nhập vào là 0 vì chưa nhập mà
        if(is_int($minutes)) // ktra xem phút có đúng kiểu int hay không
        {
            $myDateTime->minute = $this->minute + $minutes; //khi ktra xog kiểu dữ liệu int nếu đúng sẽ thực hiện cộng thêm phút mk đã nhapah vào, nếu sai thì dừng luôn
        }
        return $myDateTime;
    }
// hàm diffInMinutes này dùng để trừ  phút
    public function diffInMinutes(MyDateTime $inputTime)
    {
        if ($this->minute > $inputTime->minute) // ktra xem số phút nhập vào nhỏ hơn số phút hiện tại thì nó sẽ trừ cái số phút nhập vào bấy nhiêu
      // nghĩa là nếu số nhập vào mà nhỏ hơn 0 thì nó sẽ phải trừ đi cái mk nhập vào 
    // đề bài: Nếu n < 0 thì trừ n phút.
        {
            return $this->minute - $inputTime->minute;
        }
        return $inputTime->minute - $this->minute;
    }
// hàm isSameMonth để Check xem 2 object có cùng tháng và năm ko
    public function isSameMonth(MyDateTime $inputTime)
    {
        if ($this->year == $inputTime->year && $this->month == $inputTime->month)
         // nếu năm nhập vào bằng với năm hiện tại và tháng nhaaph vào bằng tháng hiện tại thì sẽ trả về true k thì trả về false
        {
            return true;
        }
        return false;
    }
// hàm outPut là để hiển thị ra nhé
    public function outPut()
    {
        echo 'Ngày '. $this->day . ' tháng ' . $this->month . ' năm '. $this->year;
        echo ' ( '.$this->hour.' giờ '. $this->minute . ' phút ' . $this->second . ' giây )';
    }
}
?>
/*
*A nhớ đổi lại biến cho khác thằng kia đi nhé. Cứ nộp đi k phải sợ đâu a. Mk hiểu thì lo gì
*/