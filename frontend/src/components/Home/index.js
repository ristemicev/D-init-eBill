function HomePage() {
    return (<div className="container-fluid">
            <div>
                <table style={{height: 600, tableLayout: "fixed"}} className="container-fluid text-center">
                    <tbody>
                    <tr>
                        <td className="align-middle">
                            <button type="button"
                                    className="btn btn-secondary h-50 w-50" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/admin';
                            }}>Admin Panel
                            </button>
                        </td>
                        <td className="align-middle">
                            <button type="button"
                                    className="btn btn-secondary h-50 w-50">User Profile
                            </button>
                        </td>
                        <td className="align-middle">
                            <button type="button"
                                    className="btn btn-secondary h-50 w-50">Generate New UPN
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default HomePage