import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";

export interface Props {
  filtering: string;
  onFilterChange?: (filter: string) => void;
}

const TodoFilterComponent: FunctionComponent<Props> = props => {
  let { filtering, onFilterChange } = props;
  let filterList = ["all", "completed", "incompleted"];

  let handleOnFilterChange = (item: string) => {
    if (onFilterChange) {
      onFilterChange(item);
    }
  };

  const renderFilter = filterList.map((item, key) => {
    if (item === filtering)
      return (
        <Button variant="link" key={key} disabled>
          {item.toUpperCase()}
        </Button>
      );
    else
      return (
        <Button
          variant="link"
          key={key}
          onClick={() => handleOnFilterChange(item)}
        >
          {item.toUpperCase()}
        </Button>
      );
  });

  return <div>{renderFilter}</div>;
};

export default TodoFilterComponent;
