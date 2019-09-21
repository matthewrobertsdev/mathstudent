class UnconnectedTeachingSection extends React.Component{

    render() {
        return(
          <div>
          <div className='text-margins'>
          {this.displayTeaching()}
          </div>
        </div>
        );
      }

    displayTeaching(){
        var teachingDisplay=[]
        if (this.props.teacher.description&&this.props.teacher.headings&&this.props.teacher.concepts){
            teachingDisplay.push(this.teachConcept(this.props.teacher.description));
            for (var i=0; i<this.props.teacher.headings.length; i++){
              teachingDisplay.push(this.displayHeading(this.props.teacher.headings[i], i));
              teachingDisplay.push(this.teachConcept(this.props.teacher.concepts[i], i));
            }
        }
        return teachingDisplay;
      }

    teachConcept(concept, c){
        if(concept){
          var teaching=[];
          for (var i=0; i<concept.length; i++){
            if ( typeof concept[i]==='string'){
              if (concept[i]==='\n\n'){
                teaching.push(<div key={i+'-'+c} ><br></br></div>);
              } else if (concept[i].startsWith('{H}')){
                teaching.push(<h1 key={i+'-'+c} className="main-text-color center-text">{concept[i].slice(3)}</h1>);
              } else if (concept[i].startsWith('{IL}')) {
                teaching.push(<InlineMath key={i+'-'+c} className='inline-math'>{concept[i].slice(4)}</InlineMath>);
              } else if (concept[i].startsWith('{BL}')) {
                teaching.push(<BlockMath key={i+'-'+c} className='block-math'>{concept[i].slice(4)}</BlockMath>);
              }
              else{
                teaching.push(<span key={i+'-'+c} className="Heading center-text">{concept[i]}</span>);
              }
            } else {
              console.log(concept[i])
              teaching.push(<TeachingLink key={i+'-'+c} displayName={concept[i].displayName}
                        codeName={this.props.teacher.main[i].codeName}></TeachingLink>);
            }
          }
          return teaching;
        }
      }
}
const TeachingSection=connect(mapStateToProps, mapDispatchToProps)(withRouter((UnconnectedTeachingSection)));
export default TeachingSection;