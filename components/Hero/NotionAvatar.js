// https://react-svgr.com/playground/
import * as React from 'react'

const NotionAvatar = (props) => (
  <img
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      transform: 'scale(-1,1)'
    }}
    src="https://pic.imgdb.cn/item/6537f466c458853aef0de405.png"
    alt="Notion Avatar"
    {...props}
  />
)

export default NotionAvatar
