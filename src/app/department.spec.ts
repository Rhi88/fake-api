import  { Department } from './department';
describe (' Department ',() => {
    let department =null;
    beforeEach(() =>{
        department =new Department();
        department.id='5abc459bdf';
        department.name= 'IT'
    });

    it('should be initialized',() =>{
        expect(department).toBeTruthy();
    });
    it('should have keys', () =>{
        const propertiesActual = Object.keys(department);
        const propiertiesExpected = [
            'id',
            'name'
        ];
        expect(propertiesActual).toEqual(propiertiesExpected);
    });
});