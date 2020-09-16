import React from "react";
import Header from '../Header/Header'
import NOTFOUND_IMG from '../../assets/images/404.jpg'
import BackButton from '../BackButton/BackButton'
class NotFound extends React.Component {
  render() {
    const { history } = this.props
    return <div>
      <Header title={<BackButton history={history} />} />
      <center> <img src={NOTFOUND_IMG} alt="Not Found" /></center>
    </div>
  }
}

NotFound.defaultProps = {
  history: {}
}
export default NotFound;
