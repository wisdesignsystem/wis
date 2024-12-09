import { Col, Row } from "remote:self/grid";

import styles from "./Grid.module.scss";

function Example() {
  return (
    <Row responsive>
      <Col size={8}>
        <div className={styles.grid} />
      </Col>
      <Col size={4}>
        <div className={styles.grid} />
      </Col>
      <Col>
        <div className={styles.grid} />
      </Col>
      <Col offset={2} size={{ base: 4, md: 6 }}>
        <div className={styles.grid} />
      </Col>
      <Col size={{ base: 5, sm: 10, md: 6, lg: 4, xl: 2, xxl: 1 }}>
        <div className={styles.grid} />
      </Col>
      <Col offset={1} size={3}>
        <div className={styles.grid} />
      </Col>
    </Row>
  );
}

export default Example;
