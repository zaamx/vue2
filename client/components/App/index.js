import './style.css'

export default {
  render(h) {
    return (
      <div id="app">
      	<router-link to="/category">Go to Bar</router-link>
        <router-view></router-view>
      </div>
    )
  }
}
