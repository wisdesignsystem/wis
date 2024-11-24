import { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import attrs from '@/utils/attrs'
import { matchElement } from 'remote:self/core'

import Avatar from './Avatar'
import useMaxCount from '../useMaxCount'

import styles from './Avatar.module.scss'

function Group({ className, size = 'md', variant = 'light', shape = 'circle', children }) {
  const { Avatar: avatar } = matchElement(children, ['Avatar'])

  const { ref, max } = useMaxCount()

  function renderAvatar(element) {
    return cloneElement(element, {
      className: classNames(styles.item, { [element.props.className]: !!element.props.className }),
      variant,
      shape,
      size,
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
          variant={variant}
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
   * Variant of the avatar
   */
  variant: PropTypes.oneOf(['light', 'solid', 'outline']),

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
