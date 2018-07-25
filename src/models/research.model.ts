export class Research {
  id: number = null;
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  dt: string = (new Date()).toISOString();
  researchType: number;

  public constructor(object?: Partial<Research>) {
    Object.assign(this, object);
  }

}
