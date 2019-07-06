import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { sampleData } from './sample-data';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have 20 columns in table', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.headers.length).toEqual(20);
  }));
  it('should have show entries select option', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const select = fixture.debugElement.query(By.css('select'));
    expect(select).toBeTruthy();
  }));
  it('sample data has 200 entries, given range 20, pagination should have 10 pages', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect((sampleData.length) / 20).toEqual(10);
    });
  }));
  it('on load selected page 1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selectedPage).toEqual(1);
  }));
  it('show entries selected to 25, pagination should not be selected, table should hold 25 entries', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.changeRowCount(25);
    expect(app.selectedPage).toEqual(0);
    expect(app.selectedRowCount).toEqual(25);
    expect(app.selectedRowData.length).toEqual(25);
  }));
  it('selected page 6, show entries should be empty', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.loadPage(6);
    expect(app.selectedPage).toEqual(6);
    expect(app.selectedRowCount).toEqual('');
  }));
  it('submitted status, id should be null', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.loadPage(6);
    expect(app.submittedID).toEqual(null);
    expect(app.submittedStatus).toEqual(null);
  }));
  it('show entries 50, submit row 49', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.changeRowCount(50);
    app.submitRow(app.selectedRowData[49].id, app.selectedRowData[49].status);
    expect(app.submittedID).toEqual(app.selectedRowData[49].id);
    expect(app.submittedStatus).toEqual(app.selectedRowData[49].status);
  }));
});
