import { Children } from 'react'
import PropTypes from 'prop-types'
import * as RDXTooltip from '@radix-ui/react-tooltip'

import styles from './Tooltip.module.scss'

function Tooltip({ className, side = 'top', align = 'center', text, open, defaultOpen, onOpen, children }) {
  return (
    <RDXTooltip.Provider skipDelayDuration={300}>
      <RDXTooltip.Root open={open} defaultOpen={defaultOpen} delayDuration={500} onOpenChange={onOpen}>
        <RDXTooltip.Trigger asChild>
          <span>{Children.only(children)}</span>
        </RDXTooltip.Trigger>
        <RDXTooltip.Portal>
          <RDXTooltip.Content className={styles.popper} side={side} align={align}>
            {text}
            <RDXTooltip.Arrow fill="currentColor" className={styles.arrow}></RDXTooltip.Arrow>
          </RDXTooltip.Content>
        </RDXTooltip.Portal>
      </RDXTooltip.Root>
    </RDXTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
Tooltip.getSymbiote = function (children) {
  return Children.toArray(children)[0]
}
Tooltip.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * The preferred side of the trigger to render against when open. May change when collisions occur.
   */
  side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   *  The preferred alignment against the trigger. May change when collisions occur.
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),

  /**
   * The content to render in the tooltip.
   */
  text: PropTypes.string.isRequired,

  /**
   * The controlled open state of the tooltip.
   */
  open: PropTypes.bool,

  /**
   * The open state of the tooltip when it is initially rendered.
   */
  defaultOpen: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,

  /**
   * Event handler called when the open state of the tooltip changes.
   *
   * @example
   *
   * function handleOpen(open) {
   *  if (open) {
   *    console.log('Tooltip is open')
   *  }
   * }
   *
   * <Tooltip onOpen={handleOpen}></Tooltip>
   */
  onOpen: PropTypes.func,
}

export default Tooltip
