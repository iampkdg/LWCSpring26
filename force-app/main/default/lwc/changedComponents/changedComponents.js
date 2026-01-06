import { LightningElement, api } from 'lwc';

export default class ChangedComponents extends LightningElement {
  // For lightning-input-field demo (commented out in HTML)
  @api recordId;

  /* =========================================================
     1) lightning-combobox – validation + submit
     ========================================================= */
  comboValue = '';
  comboSubmitted = '';

  get comboOptions() {
    return [
      { label: 'India', value: 'IN' },
      { label: 'United States', value: 'US' },
      { label: 'Japan', value: 'JP' }
    ];
  }

  handleComboboxChange(e) {
    this.comboValue = e.detail.value;
  }

  handleComboboxSubmit(e) {

    //This below commented code was needed before Spring'26 to check for the validation part. From Spring'26 the validation is performed in the browser itself and we don't have check using the validity methods. 


    /* ===================
    const cb = this.template.querySelector('lightning-combobox');
    if (!cb.checkValidity()) {
      cb.reportValidity(); // should focus the invalid component when submitted
      console.log('Validation Failed');
      return;
    }
    ====================== */

  }

  /* =========================================================
     3) lightning-datatable – locked column icon a11y
     ========================================================= */
  lockedData = [{ id: '1', secret: 'Read-only value', other: 'Normal column' }];

  lockedColumns = [
    {
      label: 'Locked Column Name',
      fieldName: 'secret',
      editable: false,
      displayReadOnlyIcon: true
    },
    { label: 'Other', fieldName: 'other' }
  ];



  /* =========================================================
     4) lightning-input-rich-text – default font size 13
     ========================================================= */
  rtValue = '<p>Hello</p>';

  handleRichTextChange(e) {
    this.rtValue = e.target.value;
  }

  /* =========================================================
     5) lightning-radio-group – role=status for errors
     ========================================================= */
  rgValue = '';

  get rgOptions() {
    return [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' }
    ];
  }

  handleRadioChange(e) {
    this.rgValue = e.detail.value;
  }

  //earlier had to reportValidity
  validateRadio() {
    const rg = this.template.querySelector('lightning-radio-group');
    rg.reportValidity();
  }

  /* =========================================================
     6) lightning-select – role=status for errors
     ========================================================= */
  selValue = '';

  handleSelectChange(e) {
    this.selValue = e.target.value;
  }

  validateSelect() {
    const sel = this.template.querySelector('lightning-select');
    sel.reportValidity();
  }

  /* =========================================================
     7) lightning-tree – chevron styling
     ========================================================= */
  treeItems = [
    {
      label: 'Parent',
      name: 'p',
      expanded: true,
      items: [
        { label: 'Child 1', name: 'c1' },
        { label: 'Child 2', name: 'c2' }
      ]
    }
  ];

  /* =========================================================
     8) lightning-tree-grid – keyboard focus after expand
     ========================================================= */
  tgHideCheckbox = false;

  tgColumns = [
    { type: 'text', fieldName: 'label', label: 'Name' },
    { type: 'number', fieldName: 'size', label: 'Size' }
  ];

  tgData = [
    {
      name: 'node-1',
      label: 'Node 1',
      size: 10,
      _children: [
        { name: 'node-1-1', label: 'Child 1', size: 5 },
        { name: 'node-1-2', label: 'Child 2', size: 5 }
      ]
    }
  ];

  toggleTreeGridCheckbox(e) {
    this.tgHideCheckbox = e.target.checked;
  }
}
