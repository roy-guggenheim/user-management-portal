import { ViewState } from './ToggleViewState';
import './Toggle.scss';

const iconPaths: Record<ViewState, string> = {
    grid: '/src/assets/Icons-Grid.svg',
    list: '/src/assets/Icons-List.svg'
};

function ToggleButton(props: ToggleViewProps) {
    return (
        <button
            className="toggle-button"
            onClick={() => props.onToggle(props.currentView)}>
            <img className="toggle-icon"
                src={iconPaths[props.currentView]}
                alt={`${props.currentView} view`}
            />
        </button>
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
            <img className="toggle-selector"
                data-view={props.currentView}
                src="/src/assets/Ellipse-Selector.svg"
                alt="Selector"
            />
        </div>
    );
};

export default ToggleView;