import Grafico from "../../components/grafico/grafico.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

function Dashboard(){

    const dados_clientes = [
        ["UBS Bairro", "Pacientes"],
        ["Alto Brilhante", 2100],
        ["Aldeota", 1800],
        ["Bezerra e Souza", 1700],
        ["Colibris", 1600],
        ["Cidade Nova", 1500]
    ];

    const dados_vendas = [
        ["Mês Atuação", "Pacientes"],
        ["Janeiro", 5200],
        ["Fevereiro", 4900],
        ["Março", 6200],
        ["Abril", 5210],
        ["Maio", 5362],
        ["Junho", 6200],
        ["Julho", 5200],
        ["Agosto", 6600],
        ["Setembro", 5425],
        ["Outubro", 6210],
        ["Novembro", 5362],
        ["Dezembro", 6200]
    ];

    const dados_produtos = [
        ["Atendimentos", "Quantidades"],
        ["Pré-Natal", 2100],
        ["Puérpera", 1800],
        ["Pessoa Idosa", 1700],
        ["Vacinação", 1600],
        ["Jovens/Crianças", 1500]
    ];

    const dados_cidades = [
        ["Medicamentos", "Quantidades"],
        ["Técnicos", 212],
        ["Enfermeiros", 181],
        ["Médicos", 98],
        ["Dentistas", 54],
        ["Parteiras", 25]
    ];

    return <>
        <Navbar/>

        <div className="mt-page container-fluid">
            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                <button className="btn btn-primary me-4">
                    <i className="fas fa-plus"></i>Atualizar
                </button>
            </div>
            
            <div className="row">
                
                <div className="col-md-6 p-5">
                    <Grafico titulo="Atendimentos por UBS (top 5)"
                            chartType="Bar"
                            dados={dados_clientes} 
                            legenda={false}/>
                </div>

                <div className="col-md-6 p-5">
                    <Grafico titulo="Atendimentos anual"
                            chartType="Line"
                            dados={dados_vendas} 
                            legenda={false}/>
                </div>

                <div className="col-md-6 p-5">
                    <Grafico titulo="Principais atendimentos (top 5)"
                            chartType="PieChart"
                            dados={dados_produtos} 
                            legenda={true}/>
                </div>

                <div className="col-md-6 p-5">
                    <Grafico titulo="Profissionais da saúde (top 5)"
                            chartType="BarChart"
                            dados={dados_cidades} 
                            legenda={false}/>
                </div>

            </div>

        </div>
    </>
}

export default Dashboard;