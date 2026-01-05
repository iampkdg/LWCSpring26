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
    e.preventDefault();

    // Triggers browser-like validation. New behavior: combobox participates in validation + submissions.
    const cb = this.template.querySelector('lightning-combobox');
    if (!cb.checkValidity()) {
      cb.reportValidity(); // should focus the invalid component when submitted
      return;
    }

    // Demonstrate form submission value
    const fd = new FormData(e.target);
    this.comboSubmitted = fd.get('country');
  }

  /* =========================================================
     2) lightning-datatable – status bar + scrollbar space
     ========================================================= */
  dtDraftValues = [];

  dtData = [
    { id: '1', name: 'Alpha', qty: 10, wide: 'This is a wide value to help force horizontal scroll.' },
    { id: '2', name: 'Beta', qty: 20, wide: 'More wide text… More wide text… More wide text…' },
    { id: '3', name: 'Gamma', qty: 30, wide: 'Even more wide text… Even more wide text… Even more wide text…' }
  ];

  dtColumns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Qty (editable)', fieldName: 'qty', type: 'number', editable: true },
    { label: 'Very Wide Column', fieldName: 'wide' }
  ];

  handleDatatableSave(e) {
    // Keep draft values so the status bar stays visible (to observe scrollbar behavior change).
    this.dtDraftValues = e.detail.draftValues;
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
     5) lightning-input – date/datetime calendar a11y
     ========================================================= */
  dateValue = '';
  datetimeValue = '';

  handleDateChange(e) {
    this.dateValue = e.target.value;
  }

  handleDatetimeChange(e) {
    this.datetimeValue = e.target.value;
  }

  /* =========================================================
     7) lightning-input-address – geolocation fallback
     ========================================================= */
  addressDebug = '';

  handleAddressChange(e) {
    this.addressDebug = JSON.stringify(e.detail, null, 2);
  }

  /* =========================================================
     9) lightning-input-rich-text – default font size 13
     ========================================================= */
  rtValue = '<p>Hello</p>';

  handleRichTextChange(e) {
    this.rtValue = e.target.value;
  }

  /* =========================================================
     11) lightning-radio-group – role=status for errors
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

  validateRadio() {
    const rg = this.template.querySelector('lightning-radio-group');
    rg.reportValidity();
  }

  /* =========================================================
     12) lightning-select – role=status for errors
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
     13) lightning-tree – chevron styling
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
     14) lightning-tree-grid – keyboard focus after expand
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
