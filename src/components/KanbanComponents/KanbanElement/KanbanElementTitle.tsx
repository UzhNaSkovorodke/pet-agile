import * as React from 'react';

interface IKanbanElementTitleProps {
  typeOfElement: string;
}

const KanbanElementTitle: React.FunctionComponent<IKanbanElementTitleProps> = ({typeOfElement}) => {
  return (
    <div className="body__element_title">
      <p className="__element_title">{typeOfElement === 'backlog' ? 'Сделать' : typeOfElement === 'process' ? 'В процессе' : 'Сделано'}</p>
      <p className={`__element_counter counter_${typeOfElement}`}>
        N{/* {tickets.filter((ticket: ITicket) => ticket.type === `${typeOfElement}`).length} */}
      </p>
    </div>
  );
};

export default KanbanElementTitle;
