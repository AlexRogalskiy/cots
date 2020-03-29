
import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import States from './States';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


function StateSelect(props) {
    const classes = useStyles();
    const [state, setState] = useState(props.defaultValue);
    const handleStateChange = event => {
        let newValue = event.target.value;
        setState(newValue);
        if(props.onChange) {
            props.onChange(newValue);
        }
    }
    return (
        <FormControl variant={props.variant} className={props.className || classes.formControl} required={props.required}>
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
            <Select
                native
                disabled={props.disabled}
                value={state}
                required
                label={props.label}
                onChange={handleStateChange}
                inputProps={{
                    name: 'state',
                    id: props.id,
                }}
            >
                <option value="" />
                {States.map(state => <option key={state.Code} value={state.Code}>{state.State}</option>)}
            </Select>
        </FormControl>
    );
}

StateSelect.defaultProps = {
    id: 'state-select',
    label: 'State',
    variant: 'outlined',
    required: true,
    disabled: false,
    className: '',
    defaultValue: ''
}

export default StateSelect;
