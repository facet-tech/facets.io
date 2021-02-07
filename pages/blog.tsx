import PageContainer from '../shared/components/PageContainer'
import AppProvider from '../shared/components/AppProvider'
import FacetHead from './FacetHead'

export default function BlogPage() {
    return (
        <AppProvider>
            <PageContainer>
                <FacetHead />
                <div>
                This is a very long long textThis is a very long long textThis is a very long long textThis is a very long long textThis is a very long long textThis is a very long long textThis is a very long long textThis is a very long long textThis is a very long long textThis is a very long long text

                </div>
            </PageContainer>
        </AppProvider>
    )
}