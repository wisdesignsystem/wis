import { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import attrs from '@/utils/attrs'
import { matchElement } from 'remote:self/core'

import Avatar from './Avatar'
import useMaxCount from '../useMaxCount'
import { useGroupColor } from '../useColor'

import styles from './Avatar.module.scss'

function Group({ className, color = 'auto', size = 'md', colorSchema = 'light', shape = 'circle', children }) {
  const { Avatar: avatar } = matchElement(children, ['Avatar'])

  const { ref, max } = useMaxCount()
  const getColor = useGroupColor(color)

  function renderAvatar(element, index) {
    const groupColor = getColor(index)

    const isElementAutoColor = !element.props.color || element.props.color === 'auto'

    return cloneElement(element, {
      className: classNames(styles.item, { [element.props.className]: !!element.props.className }),
      colorSchema,
      shape,
      size,
      color: isElementAutoColor ? groupColor : element.props.color,
    })
  }

  function renderAvatars(elements) {
    if (max === 0 || max >= elements.length || max === -1) {
      return elements.map(renderAvatar)
    }

    const name = `+${Math.min(99, elements.length - (max - 1))}`

    return (
      <>
        {elements.slice(0, max - 1).map(renderAvatar)}
        <Avatar
          className={styles.item}
          colorSchema={colorSchema}
          size={size}
          shape={shape}
          color="gray"
          name={name}
          initials={name}
        />
      </>
    )
  }

  return (
    <div
      ref={ref}
      className={classNames(styles.group, { [className]: !!className })}
      {...attrs({ 'data-hidden': max === -1 })}
    >
      {renderAvatars(avatar)}
    </div>
  )
}

Group.displayName = 'AvatarGroup'
Group.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Size of avatar
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),

  /**
   * Color of avatar
   */
  color: PropTypes.oneOf(['auto', 'gray', 'blue', 'purple', 'orange', 'red', 'green']),

  /**
   * Color schema of the avatar
   */
  colorSchema: PropTypes.oneOf(['light', 'dark', 'outline']),

  /**
   * The shape of the avatar
   */
  shape: PropTypes.oneOf(['circle', 'square']),

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Group
