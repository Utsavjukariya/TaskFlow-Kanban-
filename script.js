function addTask(){
  const input=document.getElementById('taskInput');
  const task=document.createElement('div');

  task.className='task';
  task.innerText=input.value;

  task.onclick=function(){
    document.getElementById('completed').appendChild(task);
  }

  document.getElementById('todo').appendChild(task);
  input.value='';
}
