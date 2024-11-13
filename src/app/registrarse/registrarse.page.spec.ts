import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastController, IonicModule } from '@ionic/angular';
import { RegistrarsePage } from './registrarse.page';
import { FormsModule } from '@angular/forms';

describe('RegistrarsePage', () => {
  let component: RegistrarsePage;
  let fixture: ComponentFixture<RegistrarsePage>;
  let routerSpy: jasmine.SpyObj<Router>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;

  beforeEach(async () => {
    // Crear espías (spies) para las dependencias
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [RegistrarsePage],
      imports: [IonicModule.forRoot(), FormsModule], // Importar FormsModule
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ToastController, useValue: toastControllerSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar un toast si los campos están vacíos', fakeAsync(async () => {
    component.user.usuario = '';
    component.user.email = '';
    component.user.password = '';
    component.user.confirmPassword = '';

    spyOn(component, 'showToast');

    await component.onClick();

    expect(component.showToast).toHaveBeenCalledWith('Por favor, completa todos los campos.');
  }));

  it('debería mostrar un toast si las contraseñas no coinciden', fakeAsync(async () => {
    component.user.usuario = 'usuario';
    component.user.email = 'test@gmail.com';
    component.user.password = '123456';
    component.user.confirmPassword = '654321';

    spyOn(component, 'showToast');

    await component.onClick();

    expect(component.showToast).toHaveBeenCalledWith('Las contraseñas no coinciden.');
  }));

  it('debería mostrar un toast si el correo no termina con @gmail.com', fakeAsync(async () => {
    component.user.usuario = 'usuario';
    component.user.email = 'test@outlook.com';
    component.user.password = '123456';
    component.user.confirmPassword = '123456';

    spyOn(component, 'showToast');

    await component.onClick();

    expect(component.showToast).toHaveBeenCalledWith('El correo electrónico debe terminar con @gmail.com');
  }));

  it('debería navegar a home si el registro es exitoso', fakeAsync(() => {
    component.user.usuario = 'usuario';
    component.user.email = 'test@gmail.com';
    component.user.password = '123456';
    component.user.confirmPassword = '123456';

    component.onClick();

    expect(localStorage.getItem('token')).toBe('soy una clave unica :D');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  }));
});
