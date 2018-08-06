<?php 
	require_once 'consql.php';
	$data = file_get_contents("php://input");
	class setCon extends Conmysql{
		public function __construct($servername,$username,$password, $dbname){
			parent::__construct($servername,$username,$password, $dbname);
		}
		public function setCourse(){
			if ($this->con==null) {
    			$this->getConnection();
    		}
    		global $data;
			$OBJ = json_decode($data);
    		$title = $OBJ->{'title'};
    		$summary = $OBJ->{'summary'};
    		$createTime = $OBJ->{'createTime'};
    		$mdNews = $OBJ->{'mdNews'};
			$sql = "INSERT INTO `mdnews` (`title`, `summary`, `createTime`, `mdNews`) VALUES (:title, :summary, :createTime, :mdNews)";
			$statement=$this->con->prepare($sql);
    		$statement->execute(array(':title'=>$title, ':summary'=>$summary, ':createTime'=>$createTime, ':mdNews'=>$mdNews));
    		$this->disConnect();
		}
	}
	$setCourses = new setCon('localhost','root','Asura103','db_icos');
	$setCourses->setCourse();
?>