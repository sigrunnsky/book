MyComponents.Task = React.createClass({

  render: function() {
    return (
      <ul className="collection">
      <li className="collection-item"> <h5><b> {this.props.task.title}
      </b></h5> <b> Priority: </b> {this.props.task.priority}
       <br/> <b> Deadline: </b> {this.props.task.deadline}</li>
      </ul>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card teal">
        <div className="card-content">
        {taskElements}
        </div>
      </div>
    );
  }
});
