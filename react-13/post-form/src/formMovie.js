import React, {Component} from 'react';

class FormMovie extends Component {
constructor(props) {
  super(props);

  this.state = {
    title: '',
    poster: '',
    comment: '',
  };
  this.onChange = this.onChange.bind(this);
  this.onClick = this.onClick.bind(this);
  this.submitForm = this.submitForm.bind(this);
  this.apiCall = this.apiCall.bind(this);
}

apiCall() {
  const url = "https://post-a-form.herokuapp.com/api/movies";

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
  };
  fetch(url, config)
    .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie #${res} has been successfully added!`);
        }
      }).catch(e => {
        console.error(e);
        alert('There was an error when adding the movie.');
      });
}

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

onClick(e) {
  this.apiCall();
}

submitForm(e) {
  e.preventDefault();
}

render() {
  return (

    <div className="FormMovie">
      <h1>New Movie</h1>
      <form onSubmit={this.submitForm}>
       <fieldset>
         <legend>Information</legend>
         <div className="form-data">
           <label htmlFor="title">title</label>
           <input
             type="text"
             id="title"
             name="title"
             onChange={this.onChange}
           />
         </div>

         <div className="form-data">
           <label htmlFor="poster">poster</label>
           <input
             type="text"
             id="poster"
             name="poster"
             onChange={this.onChange}
           />
         </div>

         <div className="form-data">
           <label htmlFor="comment">Comment</label>
           <textarea
           id="comment"
           name="comment"
           onChange={this.onChange}
           >
           </textarea>
         </div>
         <hr />
         <div className="form-data">
           <input type="submit" value="Send"
           onClick={this.onClick}/>
         </div>
       </fieldset>
     </form>
    </div>
    )
  }
}

export default FormMovie
