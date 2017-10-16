import {Pipe, PipeTransform} from '@angular/core';
import {Debater} from "../debate-info/debate-info.component";

@Pipe({
  name: 'debaterPipe'
})
export class DebaterPipePipe implements PipeTransform {

  transform(debater: Debater, args?: any): any {
    if (debater.number === "1") {
      return "一辩:" + debater.name;
    }
    else if (debater.number === "2") {
      return "二辩:" + debater.name;
    }
    else if (debater.number === "3") {
      return "三辩:" + debater.name;
    }
    else if (debater.number === "4") {
      return "四辩:" + debater.name;
    }
    else {
      return null;
    }
  }

}
