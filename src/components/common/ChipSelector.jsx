import { Container, Input, Label, Icon } from "semantic-ui-react";
import { useState, useEffect } from "react";

/**
 * Component to emulate the chips selection from angular material
 * Semantic UI has dropdown multiple select, so i wont
 * be using this component anymore 
 * 
 * usage: <ChipSelector options={categoriesClean} config={{ ignoreCase: true }}></ChipSelector>
 * @param {} props 
 * @returns 
 */
export const ChipSelector = (props) => {
  // props: config { ignorecase }, options

  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchInputText, setSearchInputText] = useState('');

  // setOptions(props.options ?? []);
  useEffect(() => {
    setOptions(props.options ?? []);
  }, [props.options]);
  

  const findTextInOption = (text) => {
    if (props?.config?.ignoreCase) {
      return options.find((optionObj) => optionObj.text.toLowerCase() === text.toLowerCase());
    }
    return options.find((optionObj) => optionObj.text === text);
  }

  const handleOnChange = (text) => {

    const value = text.target.value;

    const splits = value.split(',');
    // console.log('splits: ', splits);
    if (splits.length === 2 && splits[0].length > 0) { // found separator
      const found = findTextInOption(splits[0]);

      if (found) {
        // add to selecteds
        setSelectedOptions((alreadySelectedOptions) => {
          if (!alreadySelectedOptions.includes(found)) {
            return [ ...alreadySelectedOptions, found];
          }
          return alreadySelectedOptions;
        });
        // clean inputs
        setSearchInputText('');
      } else {
        return;
      }

    } else {
      setSearchInputText(value);
    }
  };

  const handleDeleteChip = (event) => {
    const deleteValue = event.target.parentElement.attributes.value.value;

    const updatedSelOptions = selectedOptions.filter((option) => option.value !== parseInt(deleteValue));
  
    setSelectedOptions(updatedSelOptions);
  }

  return (
    <Container style={{ border: '1px solid black'}}>
      <span>
        {selectedOptions.map((option) => {
          return (
            <span key={option.value}>
              <Label value={option.value}>{option.text}<Icon name='delete' onClick={handleDeleteChip}/></Label>
            </span>
          );
        })}
      </span>
      <Input style={{ display: 'inline'}} onChange={handleOnChange} value={searchInputText}>
      </Input>
    </Container>
  );
}