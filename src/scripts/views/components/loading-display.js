class LoadingDisplay extends HTMLElement {
  constructor() {
    super();
    this.show();
  }

  show() {
    this.innerHTML = `
      <div class="display-inner" >
        <p tabindex="0">Wait a moment</p>
        <img id="loader" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbhJREFUaEPtmOFNxDAMhZ83YIRjAhgBNoANYDLYADbgRoAJYAQ2MKqUSKG09bOT6i4i/L3GeZ+fE2ILOv+TzvVjAJzawd0cUFUt4URkl712CToJHwBkbf4fB1T1AsCNiLwyyYmWkKreATiKyDezD+VAEv8G4BrAo4g8W8EjAKr6AOAJwDuAWwbCBJiJz7pNCC9AIT7vQUEwAJOlLwsZ34TwACyIz9vdWyVrAqQrMVs751iFYAE2xJsuT2IogAgEA1Ar3gUQgdg66C3EuwEMiEsR+bJupxTjAODTe66WYtMlVC5eyB5Vr61jhBzIIgoIt/iWMUIOFAIObNmslZaqVsWoAmDqfe9vBsDeGbbi/3Fg/g9oLUDrDiu67wCwLGZ/Hw6wmTq378Y1empHqhyofQbkl2nNcyQM0PVjruvn9EYndf4NTas2sGV7Sp8Br/izauq94lOGqfF6JHZ5dZsOpFllv4OtNFo8ArgqyM0+mCkho8n/SMPkzSGv6UAqh2kynSFM8Z4SWoGgxLumEl2P1yPvHW8JRfZwOeDdYACQGaMOMRnr12fdOxCBjqzZzYGImMiaARDJWss1P7abSkBj+Nr9AAAAAElFTkSuQmCC"/>
      </div>
    `;
  }
}

customElements.define('loading-display', LoadingDisplay);
