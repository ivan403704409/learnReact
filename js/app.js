import 'antd/dist/antd.css';
import React from 'react';
import ReactDom from 'react-dom'
import Hello from './hello.js';
import { Tooltip } from 'antd';


const mountNode = document.getElementById('app');

import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('正在执行中...', 0);
  // 异步手动移除
  setTimeout(hide, 2500);
};

let App = React.createClass({
  render(){
    return (
     	<div>
		  <Tooltip title="提示文字">
		    <span>鼠标移上来就会出现提示</span>
		  </Tooltip>
		  <Hello></Hello>
		  <Button type="primary" onClick={success}>显示加载中...</Button>
     	</div>
    );
  }
});

ReactDom.render(
  <App />,
  document.getElementById('app')
  )
