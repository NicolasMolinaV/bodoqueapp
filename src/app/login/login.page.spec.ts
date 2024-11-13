import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastController, IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let routerSpy: jasmine.SpyObj<Router>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), FormsModule], 
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ToastController, useValue: toastControllerSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar un toast si el usuario o la contraseña están vacíos', fakeAsync(async () => {
    component.user.usuario = '';
    component.user.password = '';
    
    spyOn(component, 'showToast');
    
    await component.onClick();
    
    expect(component.showToast).toHaveBeenCalledWith('Por favor, completa todos los campos.');
  }));

  it('debería mostrar un toast si la contraseña están vacíos', fakeAsync(async () => {
    component.user.usuario = 'admin';
    component.user.password = '';
    
    spyOn(component, 'showToast');
    
    await component.onClick();
    
    expect(component.showToast).toHaveBeenCalledWith('Por favor, completa todos los campos.');
  }));

  it('debería mostrar un toast si el usuario están vacíos', fakeAsync(async () => {
    component.user.usuario = '';
    component.user.password = '12345';
    
    spyOn(component, 'showToast');
    
    await component.onClick();
    
    expect(component.showToast).toHaveBeenCalledWith('Por favor, completa todos los campos.');
  }));

  it('debería navegar a home si el correo electrónico termina con @gmail.com', fakeAsync(() => {
    component.user.usuario = 'test@gmail.com';
    component.user.password = '123456';

    component.onClick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  }));

  it('debería mostrar un toast si el correo electrónico no termina con @gmail.com', fakeAsync(async () => {
    component.user.usuario = 'test@other.com';
    component.user.password = '123456';

    spyOn(component, 'showToast');
    
    await component.onClick();
    
    expect(component.showToast).toHaveBeenCalledWith('El correo electrónico debe terminar con @gmail.com');
  }));
});
