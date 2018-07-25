export class Research {
  id: string = null;
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  dt: string = (new Date()).toISOString();
  researchType: number;

  public constructor(object?: Partial<Research>) {
    Object.assign(this, object);
  }

}
