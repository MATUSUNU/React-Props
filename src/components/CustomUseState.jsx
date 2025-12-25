import cars from "../cars";

function CustomUseState() {}

function useCustom(cars) {
  return [
    cars.model,
    function () {
      console.log(cars.speedStats)
    }
  ]
}

export default CustomUseState;
export {useCustom};
