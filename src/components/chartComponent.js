import React from 'react'
import {Pie} from 'react-chartjs-2';
import Modal from './modal';

class ChartDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      labelName:'',
      labelValue:'',
      labels: ['Bike', 'Car', 'Scooter'],
      datasets: [{
        data: [2000, 4000, 2637],
        backgroundColor: ['red', 'blue', 'green']
      }]
    }
    
  }

  showModal = (item) => {
    let labelName = item[0]._model.label;
    let labelValue = this.state.datasets[0].data[item[0]._index]
    this.setState({ show: true, labelName, labelValue });
  };

  hideModal = () => {
    
    this.setState({ show: false,});
  };

 

  render() {
    let showModal = this.showModal
    let {labelName, labelValue} = this.state
    let options = {
      'onClick': function (evt, item) {
        showModal(item)
        console.log('legend onClick', evt);
        console.log('legd item', item);
      }}

    return (
      <div>
        <Pie
         data = {{
           labels: this.state.labels,
           datasets: this.state.datasets
         }}
         options={options}
         
/>
         <br />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Label Name: {labelName}</p>
          <p>Value: {labelValue}</p>
        </Modal>
      </div>
    )
  }
}

export default ChartDemo;