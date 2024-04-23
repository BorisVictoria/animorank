export const load = async(event) => {
    const problem = event.params.problem
    const data = {}

    data.problem = problem

    return data
}