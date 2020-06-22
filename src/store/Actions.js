/*
export const setTeacher = (teachingName) => {
	return (dispatch) => {
		return import(`../model/mathteachers/${teachingName}Teacher`).then(
			teaching => {
				console.log(teaching.default)
				dispatch({ type: "SET_TEACHER", payload: teaching.default });
			}).catch(
				function (error) {
					console.log(error); dispatch(
						{ type: "SET_TEACHER", payload: undefined })
				});
	};
};
*/

export const getTeacher = (teachingName, callback) => {
		import(`../model/mathteachers/${teachingName}Teacher`).then(
			teacher => {
        callback(teacher.default)
			}).catch(
				function (error) {
					callback(false)
				});
};