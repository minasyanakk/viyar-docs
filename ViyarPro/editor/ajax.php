<?
    require_once($_SERVER["DOCUMENT_ROOT"] . "/service/init.php");

    function getDirStruct($dir) {
        $struct = scandir("./../$dir/");
        $struct = array_slice($struct, 2 , count($struct));
        return $struct;
    }

    function getDocStruct() {
        return [
            'dsp' => getDirStruct('dsp'),
            'fasad-mdf' => getDirStruct('fasad-mdf'),
            'frame-facade' => getDirStruct('frame-facade'),
            'veneered-facade' => getDirStruct('veneered-facade'),
            'sliding-systems' => getDirStruct('sliding-systems'),
            'sliding-systems-new' => getDirStruct('sliding-systems-new'),
            'swinging' => getDirStruct('swinging'),
            'folding' => getDirStruct('folding'),
            'steklo' => getDirStruct('steklo'),
            'stol' => getDirStruct('stol')
        ];
    }

    function getDocValue($data) {
        $page = $data['page'];
        return file_get_contents("./../$page");
    }

    function setDocValue($data) {
        $dir = $_SERVER['DOCUMENT_ROOT'] . '/service/doc/' . $data['dir'];
        $val = $data['val'];

        $cache = new CacheFile();
        $stringNameMDFile = explode('/',$data['dir']);
        $fileName = $stringNameMDFile[1];
        //логи
        $time = date("Y-m-d H:i:s");
        $logFile = $_SERVER['DOCUMENT_ROOT'] . '/store/log/instruction_logs.txt';
        $out = $time . ' Name:' . User::getName() . ' email: ' . User::getEmail() . ' ProjectName: ' . $fileName . PHP_EOL;
        $out .= file_get_contents($logFile);
        file_put_contents($logFile, $out);

        if($fileName == 'news.md') {
            $constructor = $stringNameMDFile[0];
            $news_for_md = $cache->read('news_for_md');

            $news_for_md[$constructor] = time() + $cache::DAY * 7;
            $cache->write('news_for_md', $news_for_md, false, false);
        }

        if(file_exists($dir)) {
            $r = file_put_contents($dir, $val);
            return $r !== false;
        } else {
            return 0;
        }
    }

    function exitTo() {
        Constructor::setId('');
        Constructor::setPage(null);
        return 1;
    }

    $public_methods = [
        'getDocStruct',
        'getDocValue',
        'setDocValue',
        'exitTo'
    ];
    $action = array_key_exists('action', $_REQUEST) ? $_REQUEST['action'] : '';

    if(in_array($action, $public_methods)) {
        echo json_encode($action($_REQUEST));
    } else {
        echo 0;
    }
