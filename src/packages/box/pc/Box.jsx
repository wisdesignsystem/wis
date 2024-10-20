import { useRef } from 'react'
import { matchChildren, isNode } from '@/utils/node'
import attrs from '@/utils/attrs'
import { CloseSmallIcon, CircleHelpIcon } from '@wisdesign/lsicon'
import * as Collapsible from '@radix-ui/react-collapsible'
import Button from 'remote:self/Button'

import Trigger from './Trigger'
import propTypes from '../propType'
import mergeActions from '../action'

import styles from './Box.module.less'

function Box({
  title,
  description,
  tag,
  status,
  tip,
  icon,
  closeable,
  collapsible,
  defaultCollapsed = true,
  collapsed,
  onCollapsed = () => {},
  onClose = () => {},
  children,
}) {
  const infoRef = useRef(null)

  function renderClose() {
    if (!closeable) {
      return null
    }

    return <Button size="xs" variant="ghost" icon={<CloseSmallIcon />} onClick={onClose} />
  }

  function renderInfo() {
    const isShowTag = isNode(tag, 'Tag')
    const isShowStatus = isNode(status, 'Status')

    return (
      <div ref={infoRef} className={styles.info}>
        <div className={styles.top}>
          {collapsible && (
            <Collapsible.Trigger asChild>
              <Trigger />
            </Collapsible.Trigger>
          )}
          {icon}
          <span className={styles.title}>{title}</span>
          {tip && <CircleHelpIcon />}
          {isShowTag && tag}
          {isShowStatus && status}
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    )
  }

  function handleStopPropagation(event) {
    event.stopPropagation()
  }

  function handleTrigger() {
    if (!collapsible) {
      return
    }

    infoRef.current.querySelector('[data-trigger]').click()
  }

  const { matched, unmatched } = matchChildren(children, ['Actions'])
  const actionsNode = mergeActions(matched)

  return (
    <Collapsible.Root
      className={styles.box}
      defaultOpen={defaultCollapsed}
      open={collapsible ? collapsed : true}
      disabled={!collapsible}
      {...attrs({
        'data-collapsible': collapsible,
      })}
      onOpenChange={onCollapsed}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className={styles.header} onClick={handleTrigger}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className={styles.space} onClick={handleStopPropagation}>
          {renderInfo()}
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className={styles.space} onClick={handleStopPropagation}>
          {renderClose()}
        </div>
      </div>
      <Collapsible.Content className={styles.content}>{unmatched}</Collapsible.Content>
      <div className={styles.footer}>
        <div className={styles.space}></div>
        <div className={styles.space}>{actionsNode}</div>
      </div>
    </Collapsible.Root>
  )
}

Box.propTypes = propTypes
Box.displayName = 'Box'

export default Box
