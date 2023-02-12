import './KanbanHeader.scss';

interface IKanbanHeaderProps {}

const KanbanHeader: React.FunctionComponent<IKanbanHeaderProps> = props => {
  return (
    <div className="kanban__header">
      <div className="kanban__header__title title_backlog">В плане</div>
      <div className="kanban__header__title title_process">В прогрессе</div>
      <div className="kanban__header__title title_done">Сделано</div>
    </div>
  );
};

export default KanbanHeader;
