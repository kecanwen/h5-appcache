
function changeOnlineStatus() {
  let status = document.getElementById('online-status')
  if (navigator.onLine) { //使用navigator.onLine获取当前网络是在线状态（返回true）还是离线状态（返回false）
    status.innerHTML = '在线'
    status.className = 'btn online-btn'
  }else {
    status.innerHTML = '离线'
    status.className = 'btn offline-btn'
  }
}
changeOnlineStatus()
window.addEventListener('online', changeOnlineStatus) //监听在线事件触发changeOnlineStatus事件
window.addEventListener('offline', changeOnlineStatus) //监听离线事件触发changeOnlineStatus事件