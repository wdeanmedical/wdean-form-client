export default {
  handleFieldChange: (field, e) => {
    const { fields } = this.state
    fields[field] = e.target.value
    this.setState({ fields })
  },
}
