import { ViewState } from '../../types/view';
import './Toggle.scss';

const iconPaths: Record<ViewState, string> = {
    grid: '/src/assets/Icons-Grid.svg',
    list: '/src/assets/Icons-List.svg'
};

function ToggleButton({ currentView, onToggle }: ToggleViewProps) {
    return (
        <button
            className="toggle-button"
            onClick={() => onToggle(currentView)}>
            <img className="toggle-icon"
                src={iconPaths[currentView]}
                alt={`${currentView} view`}
            />
        </button>
    );
}

function ToggleSelector({ currentView }: { currentView: ViewState }) {
    return (
        <img
            className="toggle-selector"
            data-view={currentView}
            src="/src/assets/Ellipse-Selector.svg"
            alt="Selector"
        />
    );
}

type ToggleViewProps = {
    currentView: ViewState;
    onToggle: (view: ViewState) => void;
};

function ToggleView(props: ToggleViewProps) {
    return (
        <div className="toggle-container">
            <ToggleButton currentView='grid' onToggle={props.onToggle} />
            <ToggleButton currentView='list' onToggle={props.onToggle} />
            <ToggleSelector currentView={props.currentView} />
        </div>
    );
};

export default ToggleView;