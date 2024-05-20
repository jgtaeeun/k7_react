export default function TailSelect({ops,selRef, initText, handleChange, id}) {
    const optags = ops.map(item=><option key={item} value={item}>{item}</option>)
  
    return (
    <select id={id} ref={selRef} onChange={handleChange} className="form-select rounded-lg ">
                  <option defaultValue=''>{initText}</option>  
                  {optags}
    </select>
  )
}

