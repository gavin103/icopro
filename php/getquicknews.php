<?php 
	require_once 'consql.php';
	class getCon extends Conmysql{
		public function __construct($servername,$username,$password, $dbname){
			parent::__construct($servername,$username,$password, $dbname);
		}
		public function getList(){
			if($this->con==null){
				$this->getConnection();
			}
			// $limit = $_GET['limit'];
			$sql = "SELECT * FROM `quicknews`";
			$statement=$this->con->prepare($sql);
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
			$res=json_encode($results);
			echo $res;
			$this->disConnect();
		}
	}
	$getData = new getCon('localhost','root','Asura103','db_icos');
	$getData->getList();
?>
